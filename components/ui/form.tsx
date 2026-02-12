import * as React from "react";
import {
  Controller,
  FormProvider,
  type FieldPath,
  type FieldValues,
  type UseFormReturn,
  type ControllerRenderProps,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface FormProps<TFieldValues extends FieldValues>
  extends Omit<React.HTMLAttributes<HTMLFormElement>, "onSubmit"> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: (values: TFieldValues) => void;
}

export function Form<TFieldValues extends FieldValues>({
  form,
  onSubmit,
  className,
  children,
  ...props
}: FormProps<TFieldValues>) {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-6", className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

interface FormFieldProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label: string;
  description?: string;
  children: (
    field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>
  ) => React.ReactNode;
}

export function FormField<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  children,
}: FormFieldProps<TFieldValues>) {
  // TypeScript helper via Controller to get field + error meta
  return (
    <Controller<TFieldValues, FieldPath<TFieldValues>>
      name={name}
      render={({ field, fieldState }) => (
        <div className="space-y-1.5">
          <Label htmlFor={name}>{label}</Label>
          {children(field)}
          {description && !fieldState.error && (
            <p className="text-xs text-(--color-text-secondary)">
              {description}
            </p>
          )}
          {fieldState.error && (
            <p className="text-xs font-medium text-(--color-status-error)">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}

