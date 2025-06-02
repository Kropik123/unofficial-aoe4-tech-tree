import type {Civ, GameEntity} from "./types.ts";
import CivTech from "./CivTech.tsx";

interface Props {
    civ: Civ,
    entities: GameEntity[],
}

function CivTree({civ, entities}: Props) {

    return (
        <div className="grid p-0">
            <div className="col-3 bg-purple-900">
                <h2>{civ.name}</h2>
                <h3>{civ.difficulty} Difficulty</h3>
            </div>
            <div className="col-9 flex flex-column bg-gray-900 p-2">
                <div className="flex flex-row justify-content-between">
                    <div>Collapsed ???</div>
                    <div>{civ.name} ???</div>
                </div>
                <div className="flex flex-column bg-bluegray-900 border-1 border-yellow-200">
                    <div className="grid m-0 bg-yellow-900 text-gray-100 text-lg border-bottom-1 border-yellow-200">
                        <div className="col-3 flex flex-row flex-1 justify-content-center gap-3 border-right-1 border-yellow-200 p-3">
                            <div className="font-bold text-yellow-200">I</div>
                            <div>DARK AGE</div>
                        </div>
                        <div className="col-3 flex flex-row flex-1 justify-content-center gap-3 border-right-1 border-yellow-200 p-3">
                            <div className="font-bold text-yellow-200">II</div>
                            <div>FEUDAL AGE</div>
                        </div>
                        <div className="col-3 flex flex-row flex-1 justify-content-center gap-3 border-right-1 border-yellow-200 p-3">
                            <div className="font-bold text-yellow-200">III</div>
                            <div>CASTLE AGE</div>
                        </div>
                        <div className="col-3 flex flex-row flex-1 justify-content-center gap-3 border-right-1 border-yellow-200 p-3">
                            <div className="font-bold text-yellow-200">IV</div>
                            <div>IMPERIAL AGE</div>
                        </div>
                    </div>
                    <div className="flex flex-column">
                        {entities.map(e => <CivTech key={e.id} entity={e} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CivTree
