export const supplyConstants: { [key: string]: string } = {
    barbershop: "Barberia",
    manicure: "Manicure",
};

export const supplyListMatcher = (supplyList: string): string => {  
    return supplyConstants[supplyList] || "Otro";
}