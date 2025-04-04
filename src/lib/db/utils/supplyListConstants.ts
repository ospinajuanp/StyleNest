export const supplyConstants: { [key: string]: string } = {
    barbershop: "Barberia",
    manicure: "Manicura",
    haircut: "Corte",
    pedicure: "Pedicura",
};

export const supplyListMatcher = (supplyList: string): string => {  
    return supplyConstants[supplyList] || "Otro";
}