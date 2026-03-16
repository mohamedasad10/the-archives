// The 'interface' defines the structure (shape) of an Item Record
// Every item stored in the Archives app must follow this structure

export interface ItemRecord {

  id: number;

  name: string;

  category: string;

  // optional 
  price?: number;

  year?: number;

  location?: string;

  // Dosage is only relevant for prescriptions
  dosage?: string;

  // Extra notes about the item
  notes?: string;

  // Tags help with searching and filtering
  // Example: ["kitchen", "electronics"]
  tags: string[];

  // Image URL for the item (later we will use Unsplash)
  imageUrl?: string;

  createdAt: Date;
}