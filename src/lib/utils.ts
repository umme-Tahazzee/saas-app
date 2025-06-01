import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// The cn() function combines multiple CSS class names intelligently by:

// Merging class names conditionally (clsx)

// Removing conflicting Tailwind classes (tailwind-merge)