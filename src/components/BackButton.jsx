import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 p-2"
    >
      <ChevronLeft className="h-6 w-6" />
    </Button>
  );
};

export default BackButton;