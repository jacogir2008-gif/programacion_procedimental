// Valida el pedido, datos del cliente y genera el enlace directo a WhatsApp
function finalizarPedido() {
    // 1. Obtener valores de los inputs (asegúrate de tener estos elementos en tu HTML)
    const nombre = document.getElementById('cliente-nombre') ? document.getElementById('cliente-nombre').value.trim() : '';
    const direccion = document.getElementById('cliente-direccion') ? document.getElementById('cliente-direccion').value.trim() : '';
    const telefono = document.getElementById('cliente-telefono') ? document.getElementById('cliente-telefono').value.trim() : '';

    // 2. Validar que el carrito no esté vacío
    if (pedido.length === 0) {
        mostrarAlerta("🛒 Carrito Vacío", "Debes agregar al menos una salchipapa antes de confirmar tu pedido.");
        return;
    }

    // 3. Validar el monto total
    if (total <= 0) {
        mostrarAlerta("⚠️ Error en el Total", "El monto del pedido no es válido.");
        return;
    }

    // 4. Validar que los campos del cliente no estén vacíos
    if (!nombre || !direccion || !telefono) {
        mostrarAlerta("📋 Datos Incompletos", "Por favor ingresa tu nombre, dirección y número de teléfono para enviar el domicilio.");
        return;
    }

    // 5. Construir el mensaje completo para WhatsApp
    let mensaje = "🍟 *NUEVO PEDIDO - SALCHIPAPA WARRIOR* \n\n";
    mensaje += `👤 *Cliente:* ${nombre}\n`;
    mensaje += `📍 *Dirección:* ${direccion}\n`;
    mensaje += `📞 *Teléfono:* ${telefono}\n\n`;
    mensaje += "🛒 *Detalle del pedido:*\n";

    pedido.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        mensaje += `• *${item.cantidad}x* ${item.nombre}: ${formatearMoneda(subtotal)}\n`;
    });

    mensaje += `\n💰 *TOTAL A PAGAR: ${formatearMoneda(total)}*`;

    let encodedMessage = encodeURIComponent(mensaje);

    // Reemplaza 573000000000 por tu número real de WhatsApp
    window.open(`https://wa.me/573000000000?text=${encodedMessage}`, '_blank');
}