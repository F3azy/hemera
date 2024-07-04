import React from "react";
import { services } from "../const/services";
import ServiceCard from "./ServiceCard";

const ServiceCardList = () => {
  return (
    <div className="grid grid-cols-3 gap-16 z-10">
      {services.map((service) => (
        <ServiceCard
          name={service.name}
          Icon={service.icon}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServiceCardList;
