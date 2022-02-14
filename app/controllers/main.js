import GlassSerVices from "../services/glassServices.js";

let glassSer = new GlassSerVices();

let dataGlasses = [];
let layDSKinh = () => {
    glassSer.layDSGlass()
        .then(result => {
            dataGlasses = result.data;
            hienThiDSKinh();
        })
        .catch(err => {
            console.log(err);
        })
}
layDSKinh();

let hienThiDSKinh = () => {
    let content = '';
    dataGlasses.map(item => {
        let { id, src, virtualImg, brand, name,color, price, description } = item;
        content += `
            <div class="col-4 vglasses__item">
                <img style="cursor:pointer" onclick="ganKinh('${id}')"  class="img-fluid" src="../../assets/${src}" alt="">
            </div>
        `
    })
    document.querySelector('#vglassesList').innerHTML = content;
};

let ganKinh = (idGlass) => {
    let avatar = '';
    let info = '';

    dataGlasses.map(item => {
        let { id, src, virtualImg, brand, name,color, price, description } = item;
        if (id === idGlass) {
            avatar += `
                <img class="vglasses__img" src="../../assets/${virtualImg}" alt="">
                `
            info += `
                <h5>
                    ${name}-<span>${brand}</span><span>(${color})</span>
                </h5>
                <div class="vglasses__price">
                    <span class="btn btn-danger">$${price}</span>
                    <span class="text-success">stoking</span>
                </div>
                <p>${description}</p>
            `
        }
    })
    document.getElementById('avatar').innerHTML = avatar;
    document.querySelector('.vglasses__info').innerHTML = info;
};
window.ganKinh = ganKinh;


let removeGlasses = (boolean) => {
   if(!boolean){
        document.querySelector('.vglasses__img').style.display = 'none';
   }else{
        document.querySelector('.vglasses__img').style.display = 'block';
   }
}
window.removeGlasses = removeGlasses;








