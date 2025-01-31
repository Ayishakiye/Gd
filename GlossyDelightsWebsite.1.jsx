
import { Card, CardContent } from '@/components/ui/card'; 
import { Button } from '@/components/ui/button'; 
import { useState } from 'react'; 
import { ShoppingCart, Instagram, Twitter, Star } from 'lucide-react'; 

export default function GlossyDelights() { 
  const [cart, setCart] = useState([]); 
  const [reviews, setReviews] = useState([{ user: 'Jane Doe', rating: 5, comment: 'Love this gloss! So shiny and lasts long!' }, { user: 'Mary Ann', rating: 4, comment: 'Super cute packaging and color!' }]); 

  const addToCart = (item) => { 
    setCart([...cart, item]); 
  }; 

  return ( 
    <div className='bg-pink-50 min-h-screen p-6'> 
      <header className='flex justify-between items-center bg-pink-200 p-4 rounded-2xl shadow-lg'> 
        <h1 className='text-4xl font-extrabold text-pink-700 tracking-wider'>Glossy Delights</h1> 
        <div className='space-x-4'> 
          <Button variant='outline' className='text-pink-700'>Shop</Button> 
          <Button variant='outline' className='text-pink-700'>FAQ</Button> 
          <Button variant='outline' className='text-pink-700'>Blog</Button> 
          <Button variant='solid' className='bg-pink-700 text-white flex items-center'>
            <ShoppingCart className='mr-2'/> Cart ({cart.length})</Button> 
        </div> 
      </header> 

      <main className='mt-8'> 
        <section className='text-center'> 
          <h2 className='text-3xl text-pink-700 font-semibold mb-4'>Shop Our Glosses</h2> 
          <p className='text-base text-gray-700 mb-8'>
            Discover our cute, luxurious lip glosses that are perfect for your everyday look!
          </p> 
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> 
            <Card className='rounded-2xl shadow-md bg-white'> 
              <CardContent className='p-4'> 
                <img src='https://example.com/sample-gloss.jpg' alt='Lip Gloss' className='w-full rounded-xl mb-4'/> 
                <h3 className='text-xl text-pink-700 font-bold'>Shiny Delight</h3> 
                <p className='text-gray-600 mb-2'>A glossy, long-lasting formula with a hint of shimmer.</p> 
                <Button variant='solid' className='bg-pink-700 text-white w-full' onClick={() => addToCart('Shiny Delight')}>Add to Cart</Button> 
              </CardContent> 
            </Card> 
          </div> 
        </section> 

        <section className='mt-12'> 
          <h2 className='text-3xl text-pink-700 font-semibold mb-4'>Customer Reviews</h2> 
          <div className='space-y-4'> 
            {reviews.map((review, index) => ( 
              <div key={index} className='bg-white p-4 rounded-2xl shadow-md'> 
                <div className='flex items-center mb-2'> 
                  {[...Array(review.rating)].map((_, i) => ( 
                    <Star key={i} className='text-yellow-500 w-5 h-5' /> 
                  ))} 
                </div> 
                <p className='text-pink-700 font-semibold'>{review.user}</p> 
                <p className='text-gray-600'>{review.comment}</p> 
              </div> 
            ))} 
          </div> 
        </section> 
      </main> 

      <footer className='mt-16 text-center text-gray-600'> 
        <p>Follow us on social media!</p> 
        <div className='flex justify-center space-x-4 my-4'> 
          <Instagram className='text-pink-700 w-6 h-6' /> 
          <Twitter className='text-pink-700 w-6 h-6' /> 
        </div> 
        <p>© 2025 Glossy Delights. All rights reserved.</p> 
      </footer> 
    </div> 
  ); 
}
