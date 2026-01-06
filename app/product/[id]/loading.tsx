import { ProductContainer, ProductDetails, SkeletonItem } from './styles'

export default function ProductLoading() {
  return (
    <ProductContainer>
      <SkeletonItem style={{ width: '100%', height: 656, borderRadius: 8 }} />

      <ProductDetails>
        <SkeletonItem
          style={{ width: '70%', height: 40, marginBottom: '1rem' }}
        />

        <SkeletonItem
          style={{ width: '30%', height: 32, marginBottom: '2.5rem' }}
        />

        <SkeletonItem
          style={{ width: '100%', height: 20, marginBottom: '0.5rem' }}
        />
        <SkeletonItem
          style={{ width: '100%', height: 20, marginBottom: '0.5rem' }}
        />
        <SkeletonItem
          style={{ width: '80%', height: 20, marginBottom: '0.5rem' }}
        />

        <SkeletonItem
          style={{ width: '100%', height: 60, marginTop: 'auto' }}
        />
      </ProductDetails>
    </ProductContainer>
  )
}
