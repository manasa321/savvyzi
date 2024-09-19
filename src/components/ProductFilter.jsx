import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ProductFilter = ({ filters, setFilters }) => {
  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [value]: !prevFilters[category][value]
      }
    }));
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="brand">
        <AccordionTrigger>Brand</AccordionTrigger>
        <AccordionContent>
          {Object.entries(filters.brand).map(([brand, isChecked]) => (
            <div className="flex items-center space-x-2 mb-2" key={brand}>
              <Checkbox
                id={`brand-${brand}`}
                checked={isChecked}
                onCheckedChange={() => handleFilterChange('brand', brand)}
              />
              <Label htmlFor={`brand-${brand}`}>{brand}</Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="type">
        <AccordionTrigger>Type</AccordionTrigger>
        <AccordionContent>
          {Object.entries(filters.type).map(([type, isChecked]) => (
            <div className="flex items-center space-x-2 mb-2" key={type}>
              <Checkbox
                id={`type-${type}`}
                checked={isChecked}
                onCheckedChange={() => handleFilterChange('type', type)}
              />
              <Label htmlFor={`type-${type}`}>{type}</Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="price">
        <AccordionTrigger>Price Range</AccordionTrigger>
        <AccordionContent>
          {Object.entries(filters.price).map(([range, isChecked]) => (
            <div className="flex items-center space-x-2 mb-2" key={range}>
              <Checkbox
                id={`price-${range}`}
                checked={isChecked}
                onCheckedChange={() => handleFilterChange('price', range)}
              />
              <Label htmlFor={`price-${range}`}>{range}</Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductFilter;