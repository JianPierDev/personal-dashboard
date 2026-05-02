import { CharacterItemSkeleton } from "./character-item-skeleton"

export const RickAndMortySkeletonPage = () => {
    return(
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    Array.from({length: 10}).map((_, key) => (
                        <CharacterItemSkeleton key={key} />
                    ))
                }
        </div>
    )
}