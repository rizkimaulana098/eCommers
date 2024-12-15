"use client";
import Popup from '@/components/admin-panel/Popup';
import ProductRow from '@/components/admin-panel/ProductRow';
import Product from '@/libs/models/Product';
import { setloading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}

const Dashboard = () => {



  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const dispacth = useAppDispatch()

  useEffect(() => {
    dispacth(setloading(true));


    axios
    .get("/api/get_product")
    .then((res) => setProducts(res.data))
    .catch(err => console.log(err))
    .finally(() => dispacth(setloading(false)));

  }, [updateTable]);


  return  (
  <div>
    <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4">
      <h2 className="text-3x1">ALL PRODUCTS</h2>

      <div className="mt-4 h-[100vh-180px] overflow-y-auto">
        <table className="w-full">
            <thead>
              <tr className="text-grey-500 border-t border-[#ececec]">
                <th>SR No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Picture</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product: IProduct, index) => (
                <ProductRow key={product._id}
                  srNo={index + 1}
                  setOpenPopup={setOpenPopup}
                  setUpdateTable={setUpdateTable}
                  product={product}
                />
                ))}
            </tbody>
        </table>
      </div>
    </div>

    {openPopup && (
      <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />
    )}
    
  </div>
  );
};

export default Dashboard