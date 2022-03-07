export default function treatCategoryName(str){
    const name = str[0].toUpperCase() + str.substr(1).toLowerCase();
    return name;
}