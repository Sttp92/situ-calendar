import { Suspense } from "react";
import SpecialtyList from "./SpecialtyList";
import Loading from "../loading";

export default function Schedule() {
  return (
    <main>
        <h1 className="text-center">Selecciona una especialidad</h1>
        <Suspense fallback={<Loading />}>
            <SpecialtyList />
        </Suspense>
    </main>
  )
}
