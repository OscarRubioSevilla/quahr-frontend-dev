

<script>

export default {
    props: {
        titulo: {
            required: false,
            type: String,
            default: 'Titulo por defecto'
        },
        botones: {
            required: true,
            type: Array
        },
        
         

    },data(){
        return{
           
        }
    },
    methods:{
       
        

        show :(e)=> {
            const a = `ads ${k}`;
            const ruta = 'http://127.0.0.1:5173/src/assets/landing/caracteristicas/';
         let id = e.target.id;
     
         
         if( id === 'agenda'){
            document.getElementById('img-caract').src =  ruta  +'caracteristicas_agenda.png';
            return  document.getElementById('tex-car').innerHTML ='Optimiza tu tiempo con tu agenda en la nube, siempre sincronizada de tu mano, a tu escritorio con cualquier dispositivo'
        
        }
        else if(id === 'pacientes'){
            document.getElementById('img-caract').src = ruta + 'caracteristicas_pacientes.png';
               
                    return  document.getElementById('tex-car').innerHTML = 'Fichas clínica, Odontograma, planes de tratamiento, presupuesto y seguimiento de pagos, archivo, recetas, etc...'
                }

            else if(id === 'caja'){
                document.getElementById('img-caract').src = ruta + 'caracteristicas_caja.png';
                return  document.getElementById('tex-car').innerHTML ='Tus ingresos y costos bajo control, cuentas por cobrar, personaliza tu lista de precios y así recupera tu inversión'
         
                }
                
            else if(id === 'inventario'){
                document.getElementById('img-caract').src = ruta + 'caracteristicas_inventario.png';
                return  document.getElementById('tex-car').innerHTML ='Controla entradas y salidas de materiales, también puedes hacer tu lista de compra para tu visita al deposito dental'
                  
                }
            else if(id === 'laboratorio'){
                document.getElementById('img-caract').src = ruta + 'caracteristicas_laboratorio.png';
                return  document.getElementById('tex-car').innerHTML = 'Lleva un control de tus órdenes de trabajo por laboratorio, de cada paciente, lo ya recibido o pendientes, lleva costos, etc..'
                
                
                }   
                else if(id === 'comunidad'){
                    document.getElementById('img-caract').src = ruta + 'caracteristicas_comunidad.png';
                    return  document.getElementById('tex-car').innerHTML ='Reunimos a profesionales de todo el mundo para compartir conocimiento, opiniones, reseñas de productos, aquí hay espacio para todos'
                 
                }
        },

        submit(e){
            console.log(this.$refs.img.id)
        }
    },
setup(){
  
    const texto ='Optimiza tu tiempo con tu agenda en la nube, siempre sincronizada de tu mano, a tu escritorio con cualquier dispositivo'

      
    return{texto}
    }       
        

   


}

</script>

<template>
    <header class="flex justify-between bg-white px-32 py-1">
        <div class="text-primary text-xl ">
            <a href="/">
                <img class="w-11" src="@/assets/logo/quahr-icon.png" alt="" width="100" height="100">
            </a>
        </div>
        <div class="flex gap-4 items-center">
            <button class="text-dolphin text-md" :class="[
                {'border border-dolphin rounded-md px-4': index === 0 }, 
                {'border-b-2 leading-none': index === 1}
            ]" v-for="btn, index of botones">{{ btn }}</button>
        </div>  
    </header>
    <div class="bloque-quahr px-44">
        <nav class="flex justify-between py-3">
            <a class="flex-1 flex justify-center" href="/">
                <img class="w-36" src="@/assets/logo/quahr-logo-blanco.png" alt="">
            </a>
            <div class="flex gap-5 flex-4 justify-center">
                <a class="text-white text-md font-semibold" href="">Características</a>
                <a class="text-white text-md font-semibold" href="">Beneficios</a>
                <a class="text-white text-md font-semibold" href="">Paquetes</a>
                <a class="text-white text-md font-semibold" href="">Preguntas frecuentes</a>
            </div>
        </nav>
        <div class="flex">
            <div class="flex-3">
                <img src="@/assets/landing/mockup-3dispositivos.png" alt="" />
            </div>
            <div class="flex-2 flex flex-col justify-center items-start gap-4">
                <h2 class="text-white text-3xl font-semibold ">Generando bienestar a odontólogos y pacientes de todo el mundo.</h2>
                <p class="text-white">Acelera tu crecimiento con tu preparación clínica y nuestra experiencia administrativa.</p>
                <a class="bg-white py-2 px-3 text-lg font-semibold rounded-md" href="#" >Probar Gratis </a>
            </div>
        </div>
            <div class="flex flex-col justify-center items-center gap-4">
                <h3 class="text-white text-3xl font-semibold ">¿ Qué es Quahr ?</h3>
                <hr class="w-16 h-1 border-0 bg-white">
            </div>
            <div class="py-4" >
                <span class="text-center text-white">
                    <span class="font-semibold">Quahr Dental</span>
                    es un sistema de administración y control clÍnico para odontólogos y clÍnicas odontológicas, para tener tu agenda a la mano cuando y donde la necesites.
                </span>
            </div>
                <div class="">
                    <video controls src="@/assets/video/video-promocional.mp4"></video>
                </div>
                <div class="flex flex-col justify-center items-center gap-4 py-4">
                    <h3 class="text-white text-3xl font-semibold ">Características</h3>
                    <hr class="w-16 h-1 border-0 bg-white">
                </div>
                <div @click="show"  id="div-caracteristicas" class="flex  justify-center text-center  gap-10 ">
                        <div class="flex">
                            <a href="#agenda"  >
                                    <img id="agenda"  ref="img" src="@/assets/landing/img/agenda-deg.png" alt=""  class=" rounded-full bg-black hover:bg-black-600 p-3 responsive" >
                                        <label for="" class=" text-white">Agenda</label>   
                                </a>
                        </div>
                        <div class="flex ">
                            <a href="#pacientes">
                                <img id="pacientes" ref="img"  src="@/assets/landing/img/pacientes-deg.png" alt="" class="bg-white  rounded-full p-3 hover:bg-black responsive">
                                <label for="" class="text-white">Pacientes</label>
                            </a>
                        </div>
                        <div class="flex">
                            <a href="#caja">
                                <img id="caja" src="@/assets/landing/img/caja-deg.png" alt=""  class="bg-white  rounded-full p-3 hover:bg-black responsive">
                                <label for="" class="text-white">Caja</label>
                            </a>
                        </div>
                        <div class="flex">
                            <a href="#inventario">
                                <img id="inventario"  src="@/assets/landing/img/inventario-deg.png" alt=""  class="bg-white  rounded-full p-3 hover:bg-black responsive ">
                                <label for="inventario" class="text-white">Inventario</label>
                            </a>
                        </div>
                        <div class="flex">
                            <a  href="#laboratorio">
                                <img id="laboratorio" src="@/assets/landing/img/laboratorio-deg.png" alt=""  class="bg-white  rounded-full p-3 hover:bg-black responsive">
                                <label for="laboratorio" class="text-white ">Laboratorio</label>
                            </a>
                        </div>
                        <div class="flex    ">
                            <a href="#comunidad">
                                <img id="comunidad" src="@/assets/landing/img/comunidad-deg.png" alt=""  class="bg-white  rounded-full p-3 responsive ">
                                <label for="comunidad" class="text-white">Comunidad</label>
                            </a>
                        </div>
                </div>

                <div  class="bg-white flex justify-center p-8 rounded-b-xl drop-shadow-lg font-semibold ">
                    <label id="tex-car"  for="">{{texto}}</label>
                </div>
                <div class="flex">
                    <div @click="show" >
                        <img id="img-caract" src="@/assets/landing/caracteristicas/caracteristicas_agenda.png" alt="">
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center gap-4 py-4">
                    <h3 class="text-black text-3xl font-semibold ">Beneficios</h3>
                    <hr class="w-16 h-1 border-0 bg-black">
                </div>
                <div class="flex flex-col">
                    <div class="flex gap-5 flex-4 justify-center">
                        <a class="text-black text-md font-mediumold" href="">Odontograma</a>
                        <a class="text-black text-md font-semfont-medium" href="">Especialidades</a>
                        <a class="text-black text-md font-semfont-medium" href="">Historial Clínico</a>
                        <a class="text-black text-md font-semfont-medium" href="">Diagnósticos</a>
                        <a class="text-black text-md font-semfont-medium" href="">Notificaciones</a>
                    </div>
                    
                    <div class="flex justify-center">
                        <img  src="@/assets/landing/img/img.jpeg" width="350" height="350" alt="">
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center gap-4 py-4">
                    <h3 class="text-black text-3xl font-semibold ">Paquetes</h3>
                    <hr class="w-16 h-1 border-0 bg-black">
                </div>
                <div class="flex flex-col text-center">

                    <span class="text-[#616161]">Precios transparentes para clientes que valoramos</span>
                    <span class="text-[#616161]">¡Elige el plan que se adapte mejor a tu negocio!</span>
                </div>
                <div class="flex justify-around gap-12 p-10">
                    <div class="flex paquetes-div  justify-center rounded-lg px-4">
                        <div class="">
                           <div class="border-b-2 py-2" >
                                 <h1 class="text-3xl font-semibold text-center">Profesional</h1>
                           </div>
                            <div class=" flex flex-col gap-5 text-base my-4 text-center text-[#161442]">
                                <div class="">* Hasta 100 pacientes</div>
                                <div  class="">Incluye 7 imprimibles para tu control</div>
                                <div  class="">Historia clinica de tus pacientes</div>
                                <div  class="">Recordatorios a pacientes</div>
                            </div>
                            <div class="flex justify-center gap-10 my-8" >
                                <select  class="bg-[#EFEFEF] rounded-md select-width "  name="" id="">
                                    <option value="">Anual</option>
                                    <option value="">3 años</option>
                                    <option value="">5 años</option>
                                </select>
                            </div>
                              <div class="flex flex-col text-center">
                                <span class="text-[#1D72B3] text-3xl font-extrabold">$249 MXN</span>
                                <span class="mensuales font-semibold">mensuales</span>
                              </div>  
                              <div class="flex flex-col text-center m-4">
                                <span class="text-black text-xl font-extrabold">Ahorro de 29.00%</span>
                            </div> 
                            <div class="flex flex-col  text-center">
                                <span class="font-semibold text-[#B9B9B9]">*Contratando anual</span>
                                <span class="font-semibold text-[#B9B9B9] text-xs">(pago contado $2,988.00)</span>
                            </div>
                            <div class="flex justify-center m-5">
                                <button class="btn-probar py-2 px-6 text-lg font-semibold rounded-lg">Probar gratis</button>
                            </div>
                        </div>

                        
                    </div>
                    <div class="flex  flex-col paquetes-div  rounded-lg text-center">
                        <div class="border-b-2 py-2">
                            <h1 class="text-3xl font-semibold">Avanzado</h1>
                        </div>
                        <div class="flex flex-col gap-5 text-base my-4 text-center text-[#161442]">
                            <div  >Hasta 300 pacientes</div>
                            <div>Incluye ortodoncia</div>
                            <div>Incluye Imprimibles para hoja membretada</div>
                            <div>Hasta 300MB de almacenamiento</div>
                         </div>
                         <div class="flex justify-center gap-10 m-5" >
                            <select  class="bg-[#EFEFEF] rounded-md select-width "  name="" id="">
                                <option value="">Anual</option>
                                <option value="">3 años</option>
                                <option value="">5 años</option>
                            </select>
                        </div>
                        <div class="flex flex-col text-center">
                            <span class="text-[#1D72B3] text-3xl font-extrabold">$249 MXN</span>
                            <span class="mensuales font-semibold">mensuales</span>
                          </div>  
                          <div class="flex flex-col text-center m-4">
                            <span class="text-black text-xl font-extrabold">Ahorro de 29.00%</span>
                        </div> 
                        <div class="flex flex-col  text-center">
                            <span class="font-semibold text-[#B9B9B9]">*Contratando anual</span>
                            <span class="font-semibold text-[#B9B9B9] text-xs">(pago contado $2,988.00)</span>
                        </div>
                        <div class="flex justify-center m-5">
                            <button class="btn-probar py-2 px-6 text-lg font-semibold rounded-lg">Probar gratis</button>
                        </div>

                    </div>
                    
                    <div class="flex  flex-col paquetes-div  rounded-lg text-center px-4">
                        <div class="border-b-2 py-2">
                            <h1 class="text-3xl font-semibold">Especialista
                            </h1>
                        </div>
                        <div class="flex flex-col gap-5 text-base my-4 text-center text-[#161442]">
                            <div>Sin límite de pacientes</div>
                            <div>Incluye ortodoncia y peridontograma</div>
                            <div>Incluye Imprimibles para hoja membretada</div>
                            <div>Hasta 700MB de almacenamiento</div>
                         </div>

                         <div class="flex justify-center gap-10 m-5" >
                            <select  class="bg-[#EFEFEF] rounded-md select-width "  name="" id="">
                                <option value="">Anual</option>
                                <option value="">3 años</option>
                                <option value="">5 años</option>
                            </select>
                        </div>

                         <div class="flex flex-col text-center">
                            <span class="text-[#1D72B3] text-3xl font-extrabold">$249 MXN</span>
                            <span class="mensuales font-semibold">mensuales</span>
                          </div>  
                          <div class="flex flex-col text-center m-4">
                            <span class="text-black text-xl font-extrabold">Ahorro de 29.00%</span>
                        </div> 
                        <div class="flex flex-col  text-center">
                            <span class="font-semibold text-[#B9B9B9]">*Contratando anual</span>
                            <span class="font-semibold text-[#B9B9B9] text-xs">(pago contado $2,988.00)</span>
                        </div>
                        <div class="flex justify-center m-5">
                            <button class="btn-probar py-2 px-6 text-lg font-semibold rounded-lg">Probar gratis</button>
                        </div>
                 </div>
           </div>

            <div class="flex flex-col justify-center items-center gap-4 py-4">
                <h3 class="text-black text-3xl font-semibold ">Preguntas frecuentes</h3>
                <hr class="w-16 h-1 border-0 bg-black">
            </div>
            <div class="flex flex-col gap-8 text-[#182051] font-semibold text-xl "  >
                <div class="bg-white rounded-full p-2 py-4" >
                    <span>¿Qué es Quahr dental?</span>
                </div>
                <div  class="bg-white" >
                    <span >¿Dónde se guarda mi información?</span>
                </div>
                <div>Quahr Dental es un sistema de administración y control clÍnico para odontólogos y clÍnicas odontológicas, para tener tu agenda a la mano cuando y donde la necesites.</div>
            </div>



               
                            
                        
                
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>
