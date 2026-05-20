import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJumbotron } from "@/shop/compoents/CustomJumbotron"
import { ProductGrid } from "@/shop/compoents/ProductGrid"
import { useProducts } from "@/shop/hooks/useProducts"
import { useParams } from "react-router"

export const GenderPage = () => {

  const {data}= useProducts();

const {gender} = useParams();

const genderLabel = gender === 'men' ? 'hombres' : gender === 'woman' ? 'mujeres' : 'niños';

  return (
  <>
<CustomJumbotron title= {`Productos para ${genderLabel}`} />


      <ProductGrid products={data?.products || []} />

      <CustomPagination totalPages={data?.pages || 1 } /> 
</>  )
}           