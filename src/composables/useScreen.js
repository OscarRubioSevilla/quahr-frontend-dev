import { onBeforeMount, onBeforeUnmount, ref } from 'vue';

export const useScreen = () => {

    // Detectar el tamaño de la pantalla
    const size = ref(0);
    const br = ref('xs');

    const SCREEN_SIZES = {

    }

    // 'sm': '640px',
    // // => @media (min-width: 640px) { ... }

    // 'md': '768px',
    // // => @media (min-width: 768px) { ... }

    // 'lg': '1024px',
    // // => @media (min-width: 1024px) { ... }

    // 'xl': '1280px',
    // // => @media (min-width: 1280px) { ... }

    // '2xl': '1536px',

    const resizeWindow = () => {
        size.value = window.innerWidth;

        if (size.value < 640) {
            br.value = "xs";
        }  
            else if (size.value >= 640 &&  size.value  < 768 ) {
                br.value = 'sm';
            } else if (size.value >= 768 &&  size.value  < 1024  ) {
                br.value = 'md';
            } else if (size.value >= 1024  &&  size.value  < 1280 ) {
                br.value = 'lg';
            } else if (size.value >= 1280  &&  size.value  < 1536) {
                br.value = 'xl';
            }  else if (size.value >= 1536 ) {
                 br.value = '2xl';
            }

    }

    const isMobile = () => size.value <= 1024 ;
    


    onBeforeMount(() => {
        resizeWindow();
        window.addEventListener('resize', resizeWindow);
    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', resizeWindow);
    })

    return {
        isMobile,
        size,
        br
    }

}