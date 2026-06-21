// ==================== Relationship Types ====================

import type { BaseEntity, Meta } from './jsonapi';

/** For relationships that may be partially loaded */
export type RelatedData<T extends BaseEntity> = Pick<T, 'id'> &
   Partial<Omit<T, 'id'>>;

/** After denormalization, relationships become full objects */
export type Denormalized<T> = T extends BaseEntity ? T & { type?: string } : T;

/** Array version */
export type DenormalizedArray<T> = Array<Denormalized<T>>;

// ==================== Core Entities ====================

export interface User extends BaseEntity {
   email: string;
   name: string;
   birthDate: string; // ISO string
   gender: 'm' | 'f';
   createdAt: string;
   updatedAt?: string;
   roles: ('ROLE_USER' | 'ROLE_ADMIN')[];
   avatar?: RelatedData<Image>;
   addresses: RelatedData<Address>[];
}

export interface Image extends BaseEntity {
   publicId: string;
   url?: string; // You can compute this in frontend
   createdAt: string;
   updatedAt?: string;
}

export interface Category extends BaseEntity {
   name: string;
   slug: string;
   thumbnail?: RelatedData<Image>;
}

export interface Product extends BaseEntity {
   sku: string;
   name: string;
   slug: string;
   stock: number;
   price: number;
   overallRating: number;
   totalReviews: number;
   description: string;
   information: Array<{ title: string; content: string }>;

   discount?: RelatedData<Discount>;
   thumbnail?: RelatedData<Image>;
   galleries: RelatedData<Image>[];
   category: RelatedData<Category>;
   reviews: RelatedData<Review>[];
   tagVariants: RelatedData<ProductTagVariant>[];
   createdAt: string;
}

export interface Discount extends BaseEntity {
   active: boolean;
   value: number; // e.g. 0.15 for 15%
   createdAt: string;
   updatedAt: string;
}

export interface Review extends BaseEntity {
   comment: string;
   rating: number;
   createdAt: string;
   updatedAt: string;
   isPublished: boolean;
   product: RelatedData<Product>;
   user: RelatedData<User>;
   votes: { up: number; down: number };
}

export interface ReviewVote extends BaseEntity {
   value: 'up' | 'down';
   createdAt: string;
   updatedAt?: string;
   review: RelatedData<Review>;
   user: RelatedData<User>;
}

export interface Address extends BaseEntity {
   fullName: string;
   street: string;
   city: string;
   postalCode: string;
   phone: string;
   isDefault: boolean;
   createdAt: string;
   user?: RelatedData<User>;
}

// ==================== Cart & Order ====================

export interface CartItem extends BaseEntity {
   quantity: number;
   sumPrice: number;
   createdAt: string;
   updatedAt: string;
   product: RelatedData<Product>;
   session: RelatedData<ShoppingSession>;
}

export interface ShoppingSession extends BaseEntity {
   token?: string | null;
   subtotal: number;
   total: number;
   estimatedShippingFee: number;
   cartItems: RelatedData<CartItem>[];
   user?: RelatedData<User>;
   order?: RelatedData<Order> | null;
}

export interface Order extends BaseEntity {
   orderNumber: string;
   email?: string;
   customer: RelatedData<User>;
   subtotal: number;
   shippingFee: number;
   totalAmount: number;
   status:
      | 'pending'
      | 'awaiting_payment'
      | 'shipped'
      | 'completed'
      | 'cancelled';
   createdAt: string;
   updatedAt: string;
   items: RelatedData<OrderItem>[];
   shippingAddress: RelatedData<Address>;
   payment?: RelatedData<Payment>;
}

export interface OrderItem extends BaseEntity {
   quantity: number;
   unitPrice: number;
   subtotal: number;
   createdAt: string;
   product: RelatedData<Product>;
   order: RelatedData<Order>;
   reviewTicket?: RelatedData<ReviewTicket>;
}

export interface ReviewTicket extends BaseEntity {
   product: RelatedData<Product>;
   user: RelatedData<User>;
   expiresAt: string;
   createdAt: string;
}

export interface Payment extends BaseEntity {
   provider: string;
   amount: number;
   currency: string;
   transactionId: string;
   status: 'requires_payment' | 'succeeded' | 'requires_confirmation';
   createdAt: string;
   updatedAt: string;
   paidAt?: string;
   order: RelatedData<Order>;
   card?: RelatedData<CreditCard>;
}

export interface Banner extends BaseEntity {
   url: string;
   title: string;
   description: string;
   image: RelatedData<Image>;
   startDate: string;
   endDate: string;
}

// ==================== Supporting Types ====================

export interface ProductTag extends BaseEntity {
   name: string;
   category: RelatedData<Category>;
   variants?: RelatedData<ProductTagVariant>[];
}

export interface ProductTagVariant extends BaseEntity {
   name: string;
   tag: RelatedData<ProductTag>;
}

export interface CreditCard extends BaseEntity {
   brand: 'Visa' | 'Mastercard' | 'Unknown';
   last4: string;
   expiryMonth: string;
   expiryYear: string;
   isDefault: boolean;
   createdAt: string;
   user: RelatedData<User>;
   stripeCustomer?: RelatedData<any>;
}

// ==================== Meta & Pagination ====================

export interface Pagination {
   currentPage: number;
   totalItems: number;
   itemsPerPage: number;
   totalPage: number;
}

export interface ProductMeta extends Meta {
   pagination: {
      currentPage: number;
      totalItems: number;
      itemsPerPage: number;
      totalPage: number;
   };
}

export interface ProductSearchMeta extends Meta {
   pagination: Pagination;
   filters: {
      minPrice: number;
      maxPrice: number;
      rating: Array<{ rate: number; count: number }>;
      tags: RelatedData<ProductTag>[];
      categories: RelatedData<Category>[];
   };
}

export interface ReviewMeta extends Meta {
   pagination: Pagination;
   averageRating: number;
   ratingCount: number;
   rates: Record<1 | 2 | 3 | 4 | 5, number>;
}

// ==================== Auth & Misc ====================

export type LoginCredentials = {
   email: string;
   password: string;
   reCaptchaToken: string;
};

export type ChangePassword = {
   currentPassword: string;
   newPassword: string;
};

// ==================== Utility Types for RTK Query ====================

/** Use this after denormalization */
export type DenormalizedProduct = Denormalized<Product>;
export type DenormalizedOrder = Denormalized<Order>;
