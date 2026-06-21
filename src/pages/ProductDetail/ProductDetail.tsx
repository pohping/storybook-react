import type { FC } from 'react';
import { Table, Text } from '@/components/data-display';
import { Container, Grid } from '@/components/layout';
import { Gallery } from '@/components/surfaces';
import { useGetProductQuery } from '@/services/product-api';
import type { ProductDetailProps } from './ProductDetail.types';
import { NumberInput, Rating } from '@/components/inputs';
import { Breadcrumb } from '@/components/navigation/Breadcrumb/Breadcrumb';
import { formatPrice } from '@/utils';
import { Button, Form } from '@/components/general';
import { RichTextEditor } from '@/components/inputs/RichTextEditor/RichTextEditor';
import { Loader } from '@/components/feedback';
import { ProductReviews } from '@/features';

export const ProductDetail: FC<ProductDetailProps> = (props) => {
   const { slug = 'random_slug' } = props;

   const { data: product, isLoading } = useGetProductQuery({ slug });

   if (isLoading) return <Loader variant="page" />;

   if (!product?.data) return 'No product';

   const sources = product?.data.galleries?.map((gallery) => ({
      thumbnail: gallery.url,
      original: gallery.url,
   }));

   return (
      <Container>
         <Breadcrumb>
            <a href="#home">Home</a>
            <span>{product.data.name}</span>
         </Breadcrumb>
         <Grid columns={{ sm: 1, md: 2 }} gap={5} className="mt-5">
            <Grid.Item>
               <Gallery
                  sources={sources}
                  style={{ position: 'sticky', top: '16px' }}
               />
            </Grid.Item>
            <Grid.Item>
               <Text>{product?.data.sku}</Text>
               <Text variant="h3" className="mt-3">
                  {product?.data.name}
               </Text>
               <Rating
                  className="mt-3"
                  value={product?.data.overallRating}
                  label={product?.data.totalReviews}
               />
               <Text variant="h2" className="mt-4">
                  {formatPrice(product?.data.price)}
               </Text>
               <Form className="mt-5">
                  <Form.Item label="Quantity" name="quantity">
                     <NumberInput defaultValue={1} />
                  </Form.Item>
                  <Form.Item>
                     <Button type="submit" size="lg" fullWidth>
                        Add To Cart
                     </Button>
                  </Form.Item>
               </Form>
               <section className="mt-5">
                  <Text variant="h4">Description</Text>
                  <RichTextEditor
                     className="mt-3"
                     value={product?.data.description}
                     readOnly
                  />
               </section>
               <section className="mt-5">
                  <Text variant="h4">Information</Text>
                  <Table className="mt-3" striped>
                     {product.data.information.map((info, idx) => (
                        <Table.Row key={idx}>
                           <Table.Cell>{info.title}</Table.Cell>
                           <Table.Cell>{info.content}</Table.Cell>
                        </Table.Row>
                     ))}
                  </Table>
               </section>
               <section className="mt-5">
                  <Text variant="h4">Reviews</Text>
               </section>
               <ProductReviews productId={product.data.id} />
            </Grid.Item>
         </Grid>
      </Container>
   );
};
