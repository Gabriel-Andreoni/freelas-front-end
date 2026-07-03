export function Contracts() {
    return (
        <div className="col-span-1 p-4 flex flex-col gap-2 bg-[#2c2c2a]">
            <section className="col-span-1 p-4 flex flex-col gap-2 bg-[#2c2c2a]">
                <div>
                    <h3 className="px-2 py-2 text-sm text-[#6da7ec] bg-[#032042] rounded-lg">Contrato {crypto.randomUUID()}</h3>
                </div>

                <div>
                    <div className="flex flex-col text-[#c3c2b7]">
                        <label htmlFor="contract-date">Data do Contrato</label>
                        <input
                            className="p-2 border rounded-lg outline-none"
                            type="date"
                            id="contract-date"
                        />
                 </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-full flex flex-col text-[#c3c2b7]">
                        <label htmlFor="freelancer-email">Duração (horas)</label>
                        <input
                            className="p-2 border rounded-lg outline-none"
                            type="number"
                            id="freelancer-email"
                            placeholder="160"
                        />
                    </div>

                    <div className="w-full flex flex-col text-[#c3c2b7]">
                        <label htmlFor="contract-value-per-hour">Valor por Hora</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-[#c3c2b7]">R$</span>
                            <input
                                className="p-2 border rounded-lg outline-none"
                                type="number"
                                id="contract-value-per-hour"
                                placeholder="120"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}