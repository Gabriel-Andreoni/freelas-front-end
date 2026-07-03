export function Contracts() {
    return (
        <div className="col-span-1 p-4 flex flex-col gap-2 bg-[#2c2c2a]">
            <section className="col-span-1 p-4 flex flex-col gap-2 bg-[#2c2c2a]">
                <div>
                    <h3 className="px-2 py-2 text-sm text-[#6da7ec] bg-[#032042] rounded-lg">Contrato {crypto.randomUUID()}</h3>
                </div>

                <div className="flex flex-col text-[#c3c2b7]">
                    <label htmlFor="freelancer-name">Nome</label>
                    <input
                        className="p-2 border rounded-lg outline-none"
                        type="text"
                        id="freelancer-name"
                        placeholder="Gabriel Andreoni"
                    />
                </div>

                <div className="flex gap-4">
                    <div className="w-full flex flex-col text-[#c3c2b7]">
                        <label htmlFor="freelancer-email">Email</label>
                        <input
                            className="p-2 border rounded-lg outline-none"
                            type="text"
                            id="freelancer-email"
                            placeholder="gabriel.andreoni@gmail.com"
                        />
                    </div>

                    <div className="w-full flex flex-col text-[#c3c2b7]">
                        <label htmlFor="freelancer-department">Departamento</label>
                        <select className="w-full h-full border rounded-lg outline-none">
                            <option className="bg-[#171717]">Selecione</option>
                            <option className="bg-[#171717]" value="T.I">T.I</option>
                            <option className="bg-[#171717]" value="Marketing">Marketing</option>
                            <option className="bg-[#171717]" value="Finance">Finance</option>
                        </select>
                    </div>
                </div>
            </section>
        </div>
    )
}