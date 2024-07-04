import React from "react";
import { services } from "../const/services";
import ServiceCard from "./ServiceCard";

const ServiceCardList = () => {
  return (
    <div className="grid grid-col-1 xl:grid-cols-3 gap-10 xl:gap-16 z-10">
      {services.map((service) => (
        <ServiceCard
          key={service.name}
          name={service.name}
          Icon={service.icon}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServiceCardList;
