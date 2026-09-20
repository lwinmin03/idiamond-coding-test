import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Testimonial {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  university: string;
  userAgent: string;
}

interface TempApiResponse<T> {
  users: T[];
}

const fetchTestimonials = async (): Promise<
  TempApiResponse<Testimonial>
> => {
  const { data } = await axios.get<TempApiResponse<Testimonial>>(
    "https://dummyjson.com/users?limit=6"
  );

  return data;
};

export function useGetTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}