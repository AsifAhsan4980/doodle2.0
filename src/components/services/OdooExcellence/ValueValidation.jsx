import React from 'react';
import style from "./static/style.module.css"

function ValueValidation() {
  return (
    <div className="">
      <div className={style.absolute_1}>
          <h3 className={`text-4xl font-bold leading-9 text-center text-stone-500 ${style.caveatFont2}`}>
            Value <br /> Validation
          </h3>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/444002517319809d4f900d765aa918ea97686ac249f26ac688512333c3603c6e?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain shrink-0 self-start aspect-[0.52] w-[49px]" />
      </div>
      <div className={style.absolute_2}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25b7d775937659ab092b8ebb0639b3bdd1f636f6597cd33741466835c6b9f223?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain aspect-[0.79] w-[70px]" />
            <div className={` ml-3.5 max-md:ml-2.5 ${style.caveatFont3}`}>
              Released <br /> Completed
        </div>
      </div>
    </div>
  );
}

export default ValueValidation;