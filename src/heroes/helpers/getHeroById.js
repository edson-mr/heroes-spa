import { heroes } from "../data/heroes"

export const getHeroById=(heroId)=>{
    return heroes.find(heroe=> heroe.id === heroId);
}