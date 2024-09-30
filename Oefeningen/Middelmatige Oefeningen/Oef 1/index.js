for (let i = 1; i <= 999 ;i++) {
    const power = Math.pow(2, i);
    console.log('power', power);
    if (power > 1000) {
        break;
    }
}
