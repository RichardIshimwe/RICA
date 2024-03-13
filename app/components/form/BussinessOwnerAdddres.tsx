import React from 'react'

interface BussinessOwnerAdddresProps {
    errors?: any;
    register?: any;
    isForeigner?: boolean;
    showIdn?: boolean;
    setShowIdn?: (showId: boolean) => void;
    setIsForeigner?: (foreigner: boolean) => void;
   }

const BussinessOwnerAdddres: React.FC<BussinessOwnerAdddresProps>  = ({
    errors,
    register
   }) => {
  return (
    <div>
    <h2 className='text-black font-bold'>Bussiness Owner Address</h2>
    <div>
      <div className="pb-4">
        <div>
        <div>
              <label>
                Location
              : </label>
              <input
                type="text"
                placeholder='Enter District'
                {...register("bussiness_location", {
                  required: "This field is required",
                })}
             />
             {errors.bussiness_location && <p className="text-red-800">{errors.bussiness_location.message as string}</p>}
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BussinessOwnerAdddres
