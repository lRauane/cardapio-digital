import React from 'react';
import CardImage from './CardImage';
import Product1 from '../assets/product-1.svg'

const CardProduct = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          <div className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={Product1}
                alt=''
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href='#'>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Pastel
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">ttttttttt</p>
              </div>
              <p className="text-sm font-medium text-gray-900">35</p>
            </div>
          </div>
          <div className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={Product1}
                alt=''
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href='#'>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Pastel
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">ttttttttt</p>
              </div>
              <p className="text-sm font-medium text-gray-900">35</p>
            </div>
          </div>
          <div className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={Product1}
                alt=''
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href='#'>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Pastel
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">ttttttttt</p>
              </div>
              <p className="text-sm font-medium text-gray-900">35</p>
            </div>
          </div>
          <div className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={Product1}
                alt=''
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href='#'>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Pastel
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">ttttttttt</p>
              </div>
              <p className="text-sm font-medium text-gray-900">35</p>
            </div>
          </div>
          <div className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={Product1}
                alt=''
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href='#'>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Pastel
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">ttttttttt</p>
              </div>
              <p className="text-sm font-medium text-gray-900">35</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CardProduct;
