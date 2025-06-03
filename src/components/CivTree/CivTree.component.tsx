import type {GameEntity} from "../../types/game.ts";
import CivTech from "./CivTech.tsx";
import {useEffect, useState} from "react";
import {CIV_KEY_TO_NAME} from "../../lib/civKeyMapping.ts";
import {Dropdown} from "primereact/dropdown";

interface Props {
    civs: Map<string, GameEntity[]>
}

interface CivTitle {
    key: string,
    name: string,
}

function CivTree({civs}: Props) {
    const [selectedCivKey, setSelectedCivKey] = useState<string>()

    const civTitles: CivTitle[] = Array.from(civs.keys())
        .map(k => ({ key: k, name: CIV_KEY_TO_NAME.get(k) ?? k }))
        .sort((a, b) => a.name.localeCompare(b.name));
    const civBuildings = selectedCivKey ? civs.get(selectedCivKey) : []

    useEffect(() => {
        setSelectedCivKey(civs.keys().next().value ?? undefined);
    }, [civs]);

    return (
        <div className="flex flex-column p-2">
            <div className="flex flex-row justify-content-end p-2">
                <Dropdown
                    style={{width: "240px"}}
                    value={selectedCivKey}
                    onChange={(e) => setSelectedCivKey(e.value)}
                    options={civTitles}
                    optionLabel="name"
                    optionValue={"key"}
                    placeholder="Select a Civilization" />
            </div>
            <div className="flex flex-column bg-bluegray-900 border-1 border-yellow-200">
                <div className="grid grid-nogutter bg-yellow-900 text-gray-100 text-lg border-bottom-1 border-yellow-200">
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
                    {civBuildings?.map(e => <CivTech key={e.id} entity={e} />)}
                </div>
            </div>
        </div>
    );
}

export default CivTree
