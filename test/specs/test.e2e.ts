import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'
import RetirementCalculatorPage from '../pageobjects/retirementcalculator.page'

describe('Retirement Calculator', () => {
    
    //Requirement:User should be able to submit form with all required fields filled in.


    it('User should able to submit form with all required fields filled in', async () => {
        await RetirementCalculatorPage.open()
        await RetirementCalculatorPage.fillRequiredFields('35','60','250000','1000', '6.5' ,'10')
        await RetirementCalculatorPage.clickCalculate() 
        expect(await RetirementCalculatorPage.isResultDisplayed()).toBe(true)
        expect(await RetirementCalculatorPage.isResultMessageDisplayed()).toBe(true)
       
    })

     
    it('An error message should be displayed when submitting form with mandatory field is missing', async () => {
        await RetirementCalculatorPage.open()
        await RetirementCalculatorPage.fillAllFields('','60','250000','12000','1000', '6.5' ,'10')
        await RetirementCalculatorPage.clickCalculate() 
        expect(await RetirementCalculatorPage.isMissingFieldMessageDisplayed()).toBe(true)
       
    })


    //Requirement:User should be able to submit form with all required fields filled in.

    it('User should able to submit form with allfields filled in', async () => {
        await RetirementCalculatorPage.open()
        await RetirementCalculatorPage.fillAllFields('35','60','250000','12000','10000', '6.5' ,'10')
        await RetirementCalculatorPage.clickCalculate() 
        expect(await RetirementCalculatorPage.isResultDisplayed()).toBe(true)
        expect(await RetirementCalculatorPage.isResultMessageDisplayed()).toBe(true)
       
    })


    //Requirement:Additional Social Security fields should display/hide based on Social Security benefitss toggle.


    it('Additional Social Security fields should hide when toggle is no', async () => {
        await RetirementCalculatorPage.open()
        await RetirementCalculatorPage.clickSocialSecurityOptionNo()
        expect(await RetirementCalculatorPage.areSocialSecurityFieldsHidden()).toBe(true)
    })

    it('Additional Social Security fields should display when toggle is yes', async () => {
        await RetirementCalculatorPage.open()
        await RetirementCalculatorPage.clickSocialSecurityOptionYes()
        expect(await RetirementCalculatorPage.checkSocialSecurityFieldsDisplayed()).toBe(true)


    })


    //Requirement:User should be able to update defult calculator values
   it('Adjust default values modal should open on clicking on the Adjust default values link', async () => {
        await RetirementCalculatorPage.open()
        await RetirementCalculatorPage.clickAdjustDefaultValue()
        expect(await RetirementCalculatorPage.isDefaultValuesModalDisplayed()).toBe(true)

        await  RetirementCalculatorPage.closeDefaultValuesModal()
    })

    it('User should be able to update default calculator values', async () => {
        await RetirementCalculatorPage.open()
        await RetirementCalculatorPage.clickAdjustDefaultValue()
        await RetirementCalculatorPage.updateDefaultValues('2000')
   

        //reopen modal to verify updated value is displayed
        await RetirementCalculatorPage.openAdjustDefaultValueModal()
        expect(await RetirementCalculatorPage.isFieldValueUpdated('2000')).toBe(true)
       

        await   RetirementCalculatorPage.closeDefaultValuesModal()

})

})


