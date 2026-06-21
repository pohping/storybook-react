import type { Banner } from '@/types/models';
import { Text } from '@/components/data-display';
import { Carousel } from '@/components/surfaces';
import { useJsonApiParams } from '@/hooks';
import { useGetBannersQuery } from '@/services/banner-api';
import { BannerSlide } from '@/features/BannerSlide/BannerSlide';
import { useGetCategoriesQuery } from '@/services/category-api';
import { Container, Divider, Flex, Grid } from '@/components/layout';
import { useGetProductsQuery } from '@/services/product-api';
import { CategoryCard, ProductCard } from '@/features';
import { Button } from '@/components/general';

export const Landing = () => {
   const [bannerParams] = useJsonApiParams<Banner>({
      include: ['image'],
   });
   const { data: banners } = useGetBannersQuery(bannerParams);
   const { data: categories } = useGetCategoriesQuery({});
   const { data: products } = useGetProductsQuery({});

   return (
      <>
         {' '}
         <Container fluid>
            <Carousel height="60vh">
               {banners?.data.map((banner, index) => (
                  <BannerSlide key={banner.id} index={index} banner={banner} />
               ))}
            </Carousel>
         </Container>
         <Container>
            <div className="mt-6">
               <Text variant="h3" align="center">
                  Categories
               </Text>
               <Grid columns={7} gap={3} className="mt-6">
                  {categories?.data.map((category) => (
                     <CategoryCard
                        key={category.id}
                        to="#"
                        category={category}
                     />
                  ))}
               </Grid>
            </div>
         </Container>
         <Divider className="mt-7" />
         <Container className="mt-6">
            <Text variant="h3" align="center">
               Latest Products
            </Text>
            <Grid columns={5} gap={3} className="mt-6">
               {products?.data.slice(0, 10).map((product) => (
                  <ProductCard key={product.id} to="#" product={product} />
               ))}
            </Grid>
            <Flex justify="center" className="mt-6">
               <Button size="lg">Explore More</Button>
            </Flex>
         </Container>
      </>
   );
};
