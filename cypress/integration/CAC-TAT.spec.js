///<reference types= "Cypress"/> 



describe('Central de atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.page()
    })

    it('verificar título da aplicação', () => {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    it('Informar campos obrigatórios ', () => {
        cy.firstname()
        cy.lastname()
        cy.email()
        cy.textarea()
        cy.contains('button', 'Enviar').click()

        cy.success().should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.firstname()
        cy.lastname()
        cy.invalidemail()
        cy.textarea()
        cy.contains('button', 'Enviar')
            .click()

        cy.error()
            .should('be.visible')
    })

    it('Validar valor inválido no campo telefone', () => {
        cy.get('#phone')
            .type('abcde')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório', () => {
        cy.firstname()
        cy.get('#lastName')
            .type('Silva')
        cy.get('#email')
            .type('jonas.con')
        cy.get('#phone-checkbox')
            .check()
            .should('be.checked')
        cy.textarea()

        cy.contains('button', 'Enviar').click()
        cy.error().should('be.visible')
    })

    it('limpa dados informados ', () => {
        cy.firstname()
            .should('have.value', 'Marieta')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('Meireles')
            .should('have.value', 'Meireles')
            .clear()
            .should('have.value', '')
        cy.email()
            .should('have.value', 'marieta@test.com')
            .clear()
            .should('have.value', '')
        cy.textarea()

        cy.contains('button', 'Enviar').click()
    })

    it('não informar campos obrigatórios', () => {
        cy.contains('button', 'Enviar').click()
        cy.error().should('be.visible')
    })

    it('selecao blog', () => {
        cy.get('select')
            .select('blog')
            .should('have.value', 'blog')
    })

    it('selecao cursos', () => {
        cy.get('select')
            .select('Cursos')
            .should('have.value', 'cursos')
    })

    it('selecao mentoria', () => {
        cy.get('select')
            .select('Mentoria')
            .should('have.value', 'mentoria')
    })

    it('selecao youtube', () => {
        cy.get('select')
            .select('YouTube')
            .should('have.value', 'youtube')
    })

    it('marcar radio feedback', () => {
        cy.radiofeedback()
            .check('feedback')
            .should('have.value', 'feedback')
    })

    it('marcar radio ajuda', () => {
        cy.radioajuda()
            .check('ajuda')
            .should('have.value', 'ajuda')
    })

    it('marcar radio elogio', () => {
        cy.radioelogio()
            .check('elogio')
            .should('have.value', 'elogio')
    })

    it('marca todos os radios', () => {
        cy.radios()
            .should('have.length', 3) // valida tamanho do array 
            .each(($radio) => { // interpolação  dos botoes radios
                cy.wrap($radio).check() // faz check em cada um dos botoes
                cy.should('be.checked')  // valida se cada um deles foi checkado 

            })
    })

    it('marca ambos checkboxes, depois desmarca o último', () => {
        cy.checkbox()
            .check()
            .last()
            .uncheck()
            .should('not.be.checked')
    })

    it('seleciona um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]')
            .should('not.be.value')
            .selectFile('cypress/fixtures/example.json')
            .then(input => {
                expect(input[0].files[0].name).to.eq('example.json')
            })
    })

    it('Seleciona um arquivo simulando um drag-and-drop', () => {
        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(($input) => {
                expect($input[0].files[0].name).to.eq('example.json')
            })
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture('example.json', { encoding: null }).as('examplejson')
        cy.get('input[type="file"]')
            .should('not.be.value')
            .selectFile('@examplejson')
            .should(($input) => {
                expect($input[0].files[0].name).to.eq('example.json')
            })
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')

    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.get('#privacy a').invoke('removeAttr', 'target').click()
        cy.contains('Talking About Testing').should('be.visible')
    })
    
    
    

})

