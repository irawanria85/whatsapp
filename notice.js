var ii = 0;
var iy = 0;
if (typeof history['pushState'] === 'function') {
    history['pushState']('back', null, null);
    window['onpopstate'] = function() {
        history['pushState']('back', null, null);
        if (iy == 1) {
            iy = 0;
            document['getElementById']('popup1')['style']['display'] = 'none';
            setTimeout(function() {
                if (document['getElementById']('popup1')['style']['display'] == 'none') {
                    document['getElementById']('popup1')['style']['display'] = 'block'
                }
            }, 300);
            window['navigator']['vibrate'](5000)
        } else {
            if (ii == 1) {
                iy = iy + 1
            }
        }
    }
};
setTimeout(function() {
    ii = 1
}, 200);

function hidepop() {
    document['getElementById']('popup1')['style']['display'] = 'none';
    window['location'] = '/'
}
