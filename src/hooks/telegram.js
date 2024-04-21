const tg =window.Telegram.WebApp;

export function Telegram() {
    const onClose = ()  => {
        tg.close();
    }
    return {
        tg, 
        user: tg.initDataUnsafe?.user,
        onClose
    }
}