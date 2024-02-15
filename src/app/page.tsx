"use client";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { userSchema } from "@/validations/userSchema";

type Inputs = {
  name: string;
  lastName: string;
  idRuc: string;
  phone: string;
  birthday: string;
  salary: string;
  email: string;
  url: string;
  password: string;
};

function Home() {
  const {register, handleSubmit,watch, formState: {errors}} = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  }
  );
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(data=>{console.log(data)})}>

        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" placeholder="Nombre"
        {...register('name')}
        />
        {
          errors.name?.message && <p>{errors.name?.message}</p>
        }

        <label htmlFor="lastName">Apellido</label>
        <input type="text" id="lastName" 
        {...register('lastName')}
        />
        {
          errors.lastName?.message && <p>{errors.lastName?.message}</p>
        }

        <label htmlFor="idRuc">Cédula o Ruc</label>
        <input type="number" id="idRuc" 
        {...register('idRuc')}
        />
        {
          errors.idRuc?.message && <p>{errors.idRuc?.message}</p>
        }

        <label htmlFor="phone">Telefono</label>
        <input type="number" id="phone"
        {...register('phone')}
        />
        {
          errors.phone?.message && <p>{errors.phone?.message}</p>
        }

        <label htmlFor="birthday">Fecha de nacimiento</label>
        <input type="date" id="birthday" 
        {...register('birthday')}
        />
        {
          errors.birthday?.message && <p>{errors.birthday?.message}</p>
        }

        <label htmlFor="salary">Salario</label>
        <input type="number" id="salary"
        {...register('salary')}
        />
        {
          errors.salary?.message && <p>{errors.salary?.message}</p>
        }

        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email"
        {...register('email')}
        />
        {
          errors.email?.message && <p>{errors.email?.message}</p>
        }

        <label htmlFor="url">Dirección web</label>
        <input type="url" id="url"
        {...register('url')}
        />
        {
          errors.url?.message && <p>{errors.url?.message}</p>
        }

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password"
        {...register('password')}
        />
        {
          errors.password?.message && <p>{errors.password?.message}</p>
        }

        <button type="submit">
          Enviar
        </button>
      </form>
      {/* <div>
        {JSON.stringify(watch(), null, 2)}
      </div> */}
    </div>
  );
}

export default Home;
