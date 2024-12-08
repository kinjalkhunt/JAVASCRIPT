const randomNumGen = (min=0, max=100) => {
    return Math.round(Math.random() * (max - min ) + max)
};

export default randomNumGen;