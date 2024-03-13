"use client";

import React from 'react'
import { FormProvider } from "react-hook-form";
import { useApplyForm } from './useApplyForm';
import BussinessOwnerDetails from '@/app/components/form/BussinessOwnerDetails';
import BussinessOwnerAdddres from '@/app/components/form/BussinessOwnerAdddres';
import ProductDetails from '@/app/components/form/ProductDetails';

const ApplyService = () => {
  require('dotenv').config();
  const form = React.useRef<HTMLFormElement>(null);
  const { methods, handleSubmit, error , register, errors} = useApplyForm(form);
  const [showIdn, setShowIdn] = React.useState(false);
  const [isForeigner, setIsForeigner] = React.useState(false);
  const [showPurposeOther, setShowPurposeOther] = React.useState(false);

  return (
  <div className='w-[100%]'>
    <div >
     <FormProvider {...methods}>
        <form ref={form} onSubmit={handleSubmit}>
          <div>
              <BussinessOwnerDetails
               errors={errors}
               register={register}
               isForeigner={isForeigner}
               showIdn={showIdn}
               setShowIdn={setShowIdn}
               setIsForeigner={setIsForeigner}
              />
          </div>
          <div>
                <BussinessOwnerAdddres 
                errors={errors} 
                register={register} 
                />
          </div>
          <div>
                <ProductDetails     
                errors = {errors}
                register = {register}
                showPurposeOther = {showPurposeOther}
                setShowPurposeOther = {setShowPurposeOther}
                />
          </div>
        </form>
     </FormProvider>
    </div>
  </div>
  )
}

export default ApplyService
