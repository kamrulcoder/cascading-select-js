var MymensinghDivsion = {
    Mymensingh: {
        'Mymensingh-sadar': ['Ashtadhar', 'Akua', 'Kushtia', 'Khagdahar', 'Ghagra', 'Char', 'Ishwardia', 'Char', 'Nilakshmia', 'Dapunia', 'Paranganj', 'Baira', 'Borar', 'Bhabkhali Sirta'],
        Muktagachha: ['kamrul'],
    },
    Netrokna: {},
    Jamalpur: {},
    Sherpur: {}
}

window.onload = function() {

    // html document decliare 
    let district = document.getElementById('district')
    let upzilla = document.getElementById('upzilla')
    let union = document.getElementById('union');
    let form = document.getElementById('form');

    for (const districtValue in MymensinghDivsion) {
        district.options[district.options.length] = new Option(districtValue, districtValue)
    }

    district.onchange = function() {
        upzilla.length = 1;
        union.length = 1;
        for (const upzillaValue in MymensinghDivsion[this.value]) {
            upzilla.options[upzilla.options.length] = new Option(upzillaValue, upzillaValue)
        }
    }


    upzilla.onchange = function() {
        union.length = 1;
        let unionlist = MymensinghDivsion[district.value][this.value];

        unionlist.forEach(element => {
            union.options[union.options.length] = new Option(element, element)
        });
    }


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let districtValue = document.getElementById('districtValue')
        let upzillaValue = document.getElementById('upzillaValue')
        let unionValue = document.getElementById('unionValue');
        let msg = document.getElementById('msg')

        function message(text, color = '') {
            msg.textContent = text;
            msg.style.color = color;
            setTimeout(() => {
                msg.textContent = '';
            }, 3000);
        }



        if (district.value == '') {
            district.style.border = '1px solid red';
            message("Please select District ", 'red')

        } else if (upzilla.value == '') {
            district.style.border = '1px solid transparent'
            upzilla.style.border = '1px solid red';
            message("Please select Upzilla", 'red')

        } else if (union.value == '') {
            upzilla.style.border = '1px solid transparent'
            union.style.border = '1px solid red';
            message("Please select Union", 'red')

        } else {
            union.style.border = '1px solid transparent'
            districtValue.textContent = district.value;
            upzillaValue.textContent = upzilla.value;
            unionValue.textContent = union.value;
            district.length = 1;
            upzilla.length = 1;
            union.length = 1;

            message("You are successfully fetch data ")
        }

    })


}
