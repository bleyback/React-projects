import { AddToCartIcon } from "./Icons.jsx"
import './products.css'

export function Products ({products}){
return(
    <main className="products">
        <ul>
            {
                products.map(product=>(
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <h3>{product.title}</h3>${product.price}
                        </div>
                        <div>
                            <AddToCartIcon/>
                        </div>
                    </li>
                ))
            }
        </ul>
    </main>
)
}