import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '../utilities/Card'
import Header from '../utilities/Header'

const Products = () => {
    const params = useParams()
    const { category } = params
    const { categories } = useSelector(state => state.productSlice)
    return (
        <>
            <Header />
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4 m-4'>
                {
                    categories[category].map(({ id, availabilityStatus,
                        brand,
                        category,
                        description,
                        dimensions,
                        images,
                        price, rating
                        , reviews,
                        tags, title

                    }) => (
                        <Card availabilityStatus={availabilityStatus} brand={brand} id={id}
                            category={category}
                            description={description}
                            dimensions={dimensions}
                            images={images}
                            price={price}
                            rating={rating}
                            reviews={reviews}
                            tags={tags} title={title} />
                    ))
                }

            </div>
        </>
    )
}

export default Products