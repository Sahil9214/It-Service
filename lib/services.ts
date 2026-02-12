import { Service } from "./types";
import servicesData from "@/public/src/json/service.json";

export function getAllServices(): Service[] {
  return servicesData.services as Service[];
}

export function getServiceById(id: string): Service | undefined {
  return getAllServices().find((service) => service.id === id);
}

export function getSubDomainById(serviceId: string, subDomainId: string) {
  const service = getServiceById(serviceId);
  return service?.subDomains.find((sub) => sub.id === subDomainId);
}

export function searchServices(query: string): Service[] {
  const lowerQuery = query.toLowerCase();
  return getAllServices().filter(
    (service) =>
      service.name.toLowerCase().includes(lowerQuery) ||
      service.shortDescription.toLowerCase().includes(lowerQuery) ||
      service.industries.some((ind) => ind.toLowerCase().includes(lowerQuery)),
  );
}
