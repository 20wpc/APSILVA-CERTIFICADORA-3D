export const storeConfig = {
    // Brand Identity
    storeName: "APSILVA",
    storeTagline: "Segurança Digital Sem Complicações.",
    storeDescription: "Elevando a confiança nas transações online. Certificados digitais com emissão rápida, segura e automatizada.",

    // Contact & Location
    phone: "(69) 99387-9543",
    cnpj: "36.863.516/0001-07",
    whatsappMessage: "Olá! Gostaria de emitir meu certificado digital com a APSILVA.",
    address: "Rua Brasília, 3312 - São João Bosco",
    city: "Porto Velho, RO",
    zipCode: "",

    // Social Media Links
    socials: {
        instagram: "https://instagram.com/apsilvacertificadora",
        twitter: "https://twitter.com/apsilvacert",
        discord: "",
    },

    // Quick Links (Footer)
    supportLinks: [
        { label: "Emitir Certificado", url: "#" },
        { label: "Renovação Integrada", url: "#" },
        { label: "Suporte Técnico", url: "#" },
        { label: "Fale Conosco", url: "#" }
    ]
};

// Helper function to build the WhatsApp URL with Lead Data
export const getWhatsAppUrl = (name = '', userPhone = '', email = '') => {
    const cleanPhone = storeConfig.phone.replace(/\D/g, '');

    let text = '';
    // Se tiver dados do form, monta a mensagem completa
    if (name || userPhone || email) {
        text = `Olá ${storeConfig.storeName}, venho pelo site.\n\nMeus dados:\nNome: ${name}\nCelular: ${userPhone}\nE-mail: ${email}`;
    } else {
        text = storeConfig.whatsappMessage; // fallback default
    }

    const encodedMessage = encodeURIComponent(text);
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};
