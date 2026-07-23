<div class="modal" id="modalRegistro">
    <div class="modal-background" onclick="cerrarModal()"></div>

    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Registro Contable</p>
            <button class="delete" aria-label="close" onclick="cerrarModal()"></button>
        </header>

        <section class="modal-card-body">
            

            <div id="alertaFormulario"></div>

            <div class="field">
                <label class="label">Fecha</label>
                <div class="control">
                    <input>  class="input" type="date" id="fecha" </input>
                </div>
            </div>

            <div class="field">
                <label class="label">Concepto</label>
                <div class="control">
                    <input> class="input" type="text" id="concepto" placeholder="Ej: Venta de almuerzo" </input>
                </div>
            </div>

            <div class="field">
                <label class="label">Tipo</label>
                <div class="control">
                    <div class="select is-fullwidth">
                        <select id="tipo">
                            <option value="Ingreso">Ingreso</option>
                            <option value="Egreso">Egreso</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <label class="label">Valor</label>
                <div class="control">
                    <input> class="input" type="number" id="valor" placeholder="Ej: 15000" </input>
                </div>
            </div>

        </section>

        <footer class="modal-card-foot">
            <button class="button is-success" onclick="guardarRegistro()">Guardar</button>
            <button class="button" onclick="cerrarModal()">Cancelar</button>
        </footer>
    </div>
</div>