let $btnEditarUsuario = document.getElementById('btnEditarUsuario');
let $inputNombre = document.getElementById('txtNombreUsuario');
let $inputApellido = document.getElementById('txtApellidoUsuario');
let $inputCorreo = document.getElementById('txtCorreoUsuario');
let $inputTelefono = document.getElementById('txtTelefonoUsuario');
let $inputDireccion = document.getElementById('txtDireccionUsuario');
let $inputFoto = document.getElementById('imgFotoUsuario');
let $inputTarjeta = document.getElementById('txtTarjeta');
let $inputVencimiento = document.getElementById('txtVencimiento');
let $inputCVV = document.getElementById('txtCVV');
let $inputCBX = document.getElementById('cbxUneteEquipo');
let $btnGuardarUsuario = document.getElementById('btnGuardarUsuario');
let $formularioVendedor = document.querySelector('.formulario_vendedor');
let $archivo = document.getElementById('imgFotoUsuario');
let $foto = document.getElementById('imgFotoActual');
let $esVendedor = document.getElementById("cbxUneteEquipo");
let $inputNombreComercio = document.getElementById("txtNombreComercio");
let $inputNombreVendedor = document.getElementById("txtNombreVendedor");
let $inputCorreoEmpresa = document.getElementById("txtCorreoEmpresa");
let $inputTelefonoEmpresa = document.getElementById("nmbrTelefonoEmpresa");
let $inputDireccionEmpresa = document.getElementById("txtDireccionEmpresa");
let $formVendedor = document.getElementById("divFormularioVendedor");
let $btnEditarVendedor = document.getElementById("btn_Editar_Vendedor");
let $btnGuardarVendedor = document.getElementById("btn_Guardar_Vendedor");
let $btnAgregarVendedor = document.getElementById("btn_Agregar_Vendedor");
let $inputNombreProductoNuevo = document.getElementById("txtNombreProductoNuevo");
let $inputDescripcionProductoNuevo = document.getElementById("txtDescripcionNuevo");
let $inputCostoProductoNuevo = document.getElementById("numberCostoNuevo");
let $inputCantidadProductoNuevo = document.getElementById("numberCantidadNuevo");
let $inputCategoriaProductoNuevo = document.getElementById("txtCategoriaNuevo");
let $btnModalAceptarProductoNuevo = document.getElementById("btnModalAceptarProductoNuevo");
let $btnModalCancelarProductoNuevo = document.getElementById("btnModalCancelarProductoNuevo");
let $modalProducto = document.getElementsByClassName('modal_producto');
let $archivoProductoNuevo = document.getElementById('archivoFotoProductoNuevo');
let $imgProductoNuevo = document.getElementById('imgProductoNuevo');
let $btnSubirImagenProductoNuevo = document.getElementById("btnSubirImagenProductoNuevo");


//llamada a API para cargar datos del usuario basados en su correo;
