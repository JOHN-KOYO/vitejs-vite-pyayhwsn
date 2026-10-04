
import React, { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { products } from "./ProductsData"

const categories = [
    {
        key: "Steel",
        name: "Steel",
        company: "Devki Steel Mills Limited",
        count: 27,
        image: "https://devkigroupkenya.com/assets/steel-1-bkH69grl.jpg"
    },
    {
        key: "Cement",
        name: "Cement",
        company: "National Cement Company Limited",
        count: 15,
        image: "https://devkigroupkenya.com/assets/cement-1-tOZ8G_T0.jpg"
    },
    {
        key: "Roofing",
        name: "Roofing",
        company: "Maisha Mabati Mills Limited",
        count: 22,
        image: "https://devkigroupkenya.com/assets/roofing-1-BKAwDYuV.jpg"
    },
    {
        key: "Fertilizers",
        name: "Fertilizers",
        company: "Maisha Minerals & Fertilizers Limited",
        count: 8,
        image: "https://devkigroupkenya.com/assets/fertilizers-1.jpg"
    },
    {
        key: "Aviation",
        name: "Aviation",
        company: "Northwood Aviation Agencies Limited",
        count: 5,
        image: "https://devkigroupkenya.com/assets/aviation-1.jpg"
    },
    {
        key: "Packaging",
        name: "Packaging",
        company: "Maisha Packaging Company Limited",
        count: 6,
        image: "https://devkigroupkenya.com/assets/packaging-1.jpg"
    },
    {
        key: "Clinker",
        name: "Clinker",
        company: "Cemtech Limited",
        count: 4,
        image: "https://devkigroupkenya.com/assets/clinker-1.jpg"
    },
    {
        key: "Rwanda",
        name: "Rwanda",
        company: "CIMERWA PLC",
        count: 3,
        image: "https://devkigroupkenya.com/assets/rwanda-1.jpg"
    }
]


function ProductCard({ product, categoryImage }) {
    const [quantity, setQuantity] = useState(1)

    function addToOrder() {
        alert(
            `${quantity} x ${product.name} added to your order.`
        )
    }

    return (
        <article className="product-card">

            <div className="product-image">
                <img
                    src={categoryImage}
                    alt={product.name}
                />
            </div>

            <div className="product-card-content">

                <span className="product-category">
                    {product.category}
                </span>

                <h3>{product.name}</h3>

                <div className="product-price">
                    <strong>
                        KES {Number(product.price).toLocaleString()}
                    </strong>

                    <span>
                        / {product.unit}
                    </span>
                </div>

                <div className="product-order-row">

                    <label>
                        Quantity
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) =>
                                setQuantity(
                                    Math.max(
                                        1,
                                        Number(e.target.value)
                                    )
                                )
                            }
                        />
                    </label>

                    <button
                        type="button"
                        onClick={addToOrder}
                    >
                        Add to order
                    </button>

                </div>

            </div>

        </article>
    )
}


export default function Products({ compact = false }) {

    const [activeCategory, setActiveCategory] =
        useState("All")

    const [search, setSearch] = useState("")

    const filteredProducts = useMemo(() => {

        return products.filter((product) => {

            const matchesCategory =
                activeCategory === "All" ||
                product.category === activeCategory

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(search.toLowerCase())

            return matchesCategory && matchesSearch
        })

    }, [activeCategory, search])


    const groupedProducts = categories.map((category) => ({
        ...category,

        products: filteredProducts.filter(
            product => product.category === category.key
        )
    }))


    return (
        <section className={`products-section ${compact ? "compact" : ""}`}>

            <div className="container">

                {/* Section heading */}
                <div className="section-heading">

                    <span className="section-kicker">
                        DEVKI GROUP
                    </span>

                    <h2>
                        Our Products
                    </h2>

                    <p>
                        Quality products manufactured and supplied
                        by companies within the Devki Group.
                    </p>

                </div>


                {/* Search */}
                <div className="products-toolbar">

                    <input
                        type="search"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                {/* Category tabs */}
                <div className="category-tabs">

                    <button
                        className={
                            activeCategory === "All"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setActiveCategory("All")
                        }
                    >
                        All products
                    </button>


                    {categories.map(category => (

                        <button
                            key={category.key}
                            className={
                                activeCategory === category.key
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                setActiveCategory(category.key)
                            }
                        >
                            {category.name}
                        </button>

                    ))}

                </div>


                {/* Products */}
                {activeCategory === "All" ? (

                    groupedProducts.map(category => {

                        if (category.products.length === 0) {
                            return null
                        }

                        return (
                            <div
                                className="category-block"
                                key={category.key}
                            >

                                <div className="category-header">

                                    <div>
                                        <span className="category-label">
                                            {category.name}
                                        </span>

                                        <h3>
                                            {category.company}
                                        </h3>

                                        <p>
                                            {category.count} products
                                        </p>
                                    </div>

                                    <Link
                                        to={`/products?category=${category.key}`}
                                        className="category-link"
                                    >
                                        Order products →
                                    </Link>

                                </div>


                                <div className="product-grid">

                                    {category.products.map(product => (

                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            categoryImage={category.image}
                                        />

                                    ))}

                                </div>

                            </div>
                        )

                    })

                ) : (

                    <div className="category-block">

                        <div className="category-header">

                            <div>

                                <span className="category-label">
                                    {activeCategory}
                                </span>

                                <h3>
                                    {
                                        categories.find(
                                            category =>
                                                category.key ===
                                                activeCategory
                                        )?.company
                                    }
                                </h3>

                            </div>

                        </div>


                        <div className="product-grid">

                            {filteredProducts.map(product => {

                                const category =
                                    categories.find(
                                        item =>
                                            item.key ===
                                            product.category
                                    )

                                return (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        categoryImage={
                                            category?.image
                                        }
                                    />
                                )

                            })}

                        </div>

                    </div>

                )}


                {/* No results */}
                {filteredProducts.length === 0 && (

                    <div className="no-products">

                        <h3>No products found</h3>

                        <p>
                            Try another product name or
                            select a different category.
                        </p>

                    </div>

                )}

            </div>

        </section>
    )
}

