import { expect} from '@wdio/globals'
import Page from './page';
import RetirementCalculatorPageSelectors from '../support/selectors/retirementCalculatotPageSelectors';
import RetirementCalculatorStrings from '../support/strings/retirementcalculatorPageStrings';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RetirementCalculatorPage extends Page {

   

   /**
   * Define Page Methods
   */


        public open () {
        return super.open('insights-tools/retirement-calculator.html');

        }
        
        //Fill required fields with provided values
        async fillRequiredFields (currentAge:  string, retirementAge:  string, currentIncome:  string, totalSavings:  string, annualsavings: string, plannedsavings: string) {
        await RetirementCalculatorPageSelectors.currentAge.setValue(currentAge)
        await RetirementCalculatorPageSelectors.retirementAge.setValue(retirementAge)

        await RetirementCalculatorPageSelectors.currentIncome.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentIncome.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentIncome.click()
        await RetirementCalculatorPageSelectors.currentIncome.clearValue()
        await RetirementCalculatorPageSelectors.currentIncome.setValue(currentIncome)


        await RetirementCalculatorPageSelectors.currentTotalSavings.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentTotalSavings.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentTotalSavings.click()
        await RetirementCalculatorPageSelectors.currentTotalSavings.clearValue()
        await RetirementCalculatorPageSelectors.currentTotalSavings.setValue(totalSavings)

        await RetirementCalculatorPageSelectors.currentAnnualSavings.setValue(annualsavings)

        await RetirementCalculatorPageSelectors.savingsIncreaseRate.setValue(plannedsavings)
        }


         //Fill All fields with provided values
        async fillAllFields (currentAge:  string, retirementAge:  string, currentIncome:  string,  spouseIncome: string, totalSavings:  string, annualsavings: string, plannedsavings: string) {
        await RetirementCalculatorPageSelectors.currentAge.setValue(currentAge)
        await RetirementCalculatorPageSelectors.retirementAge.setValue(retirementAge)

        await RetirementCalculatorPageSelectors.currentIncome.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentIncome.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentIncome.click()
        await RetirementCalculatorPageSelectors.currentIncome.clearValue()
        await RetirementCalculatorPageSelectors.currentIncome.setValue(currentIncome)

        await RetirementCalculatorPageSelectors.spouseIncome.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.spouseIncome.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.spouseIncome.click()
        await RetirementCalculatorPageSelectors.spouseIncome.clearValue()
        await RetirementCalculatorPageSelectors.spouseIncome.setValue(spouseIncome)
        

        await RetirementCalculatorPageSelectors.currentTotalSavings.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentTotalSavings.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentTotalSavings.click()
        await RetirementCalculatorPageSelectors.currentTotalSavings.clearValue()
        await RetirementCalculatorPageSelectors.currentTotalSavings.setValue(totalSavings)

         await RetirementCalculatorPageSelectors.currentAnnualSavings.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentAnnualSavings.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentAnnualSavings.click()
        await RetirementCalculatorPageSelectors.currentAnnualSavings.clearValue()
        await RetirementCalculatorPageSelectors.currentAnnualSavings.setValue(annualsavings)

        await RetirementCalculatorPageSelectors.savingsIncreaseRate.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.savingsIncreaseRate.setValue(plannedsavings)
        }
   

        //Click Calculate button
        async clickCalculate () {
        await RetirementCalculatorPageSelectors.calculateButton.click()
        }

    

        // Select Social Security option yes
        async selectSocialSecurityOptionYes () {
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.scrollIntoView();
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.waitForClickable({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.click();
           
        }
           
    


               // Select Social Security option yes
        async clickSocialSecurityOptionYes () {
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.scrollIntoView();
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.waitForClickable({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.click();
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.waitForDisplayed({ timeout: 5000 });
        }

        async checkSocialSecurityFieldsDisplayed () {
           await RetirementCalculatorPageSelectors.socialSecurityToggleYes.isSelected()
       
            return await RetirementCalculatorPageSelectors.socialSecurityMarStatusSingle.isDisplayed() &&
                await RetirementCalculatorPageSelectors.socialSecurityMarStatusMarried.isDisplayed() &&
                await RetirementCalculatorPageSelectors.socialSecurityOverrideAmount.isDisplayed()
        }
     

         async clickSocialSecurityOptionNo () {
            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.scrollIntoView();
            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.waitForClickable({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.click();
            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.waitForDisplayed({ timeout: 5000 });
        }
        
        // Check if result section is displayed
     
        async isResultDisplayed () {
        await RetirementCalculatorPageSelectors.resultSection.waitForDisplayed( { timeout: 10000 } )
        return await RetirementCalculatorPageSelectors.resultSection.isDisplayed()
        }

        // Check if result section is displayed
     
        async isResultMessageDisplayed () {
        return await RetirementCalculatorPageSelectors.resultMessage.isDisplayed()
        return await expect(RetirementCalculatorPageSelectors.resultMessage).toHaveText(RetirementCalculatorStrings.ResultMessage)
        }

        //check if missing field error message is displayed when mandatory field is missing    
        async isMissingFieldMessageDisplayed () {
        return await RetirementCalculatorPageSelectors.errorMessage.isDisplayed()
        return await expect(RetirementCalculatorPageSelectors.errorMessage).toHaveText(RetirementCalculatorStrings.errorMessage )
        }


        //check if additional social security fields hide when social security toggle is no
        async areSocialSecurityFieldsHidden () {

            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.isSelected()

            const singleHidden = !(await RetirementCalculatorPageSelectors.socialSecurityMarStatusSingle.isDisplayed());
            const marriedHidden = !(await RetirementCalculatorPageSelectors.socialSecurityMarStatusMarried.isDisplayed());
            const overrideHidden = !(await RetirementCalculatorPageSelectors.socialSecurityOverrideAmount.isDisplayed());
            if(singleHidden && marriedHidden && overrideHidden) {
                return true;
            }
            else {
                return false;
            }
        }


        async enterFieldValues (fieldName: string, value: string) {
            switch (fieldName.toLowerCase()) {   
                case 'current age':
                    await RetirementCalculatorPageSelectors.currentAge.setValue(value)
                    break
                case 'retirement age':
                    await RetirementCalculatorPageSelectors.retirementAge.setValue(value)
                    break  
                case 'current income': 
                    await RetirementCalculatorPageSelectors.currentIncome.setValue(value)
                    break
                case 'spouse income':
                    await RetirementCalculatorPageSelectors.spouseIncome.setValue(value)
                    break
                case 'current total savings':
                    await RetirementCalculatorPageSelectors.currentTotalSavings.setValue(value)
                    break   
                case 'current annual savings':
                    await RetirementCalculatorPageSelectors.currentAnnualSavings.setValue(value)
                    break
                case 'savings increase rate':
                    await RetirementCalculatorPageSelectors.savingsIncreaseRate.setValue(value)
                    break
                default:    
                    console.log(`Field name ${fieldName} is not recognized.`)

            }
       
       }


        // Click Adjust Default Value link
        async clickAdjustDefaultValue() {
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.scrollIntoView();
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.waitForClickable({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.click();
        }

           // Click Adjust Default Value link
        async openAdjustDefaultValueModal() {
            await RetirementCalculatorPageSelectors.defaultCalculatorValues.isDisplayed();
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.waitForDisplayed({ timeout: 10000 });
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.scrollIntoView();
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.waitForClickable({ timeout: 5000 });
             
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.click();
        }

        // Check if default values modal is displayed
        async isDefaultValuesModalDisplayed() {
            return await RetirementCalculatorPageSelectors.defaultValuesModal.isDisplayed();
        }

        // Update default values in modal
        async updateDefaultValues(value: string) {
            await RetirementCalculatorPageSelectors.defaultValuesModal.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.additionalIncomeDefaultValue.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.additionalIncomeDefaultValue.setValue(value);
            await RetirementCalculatorPageSelectors.saveChangesButton.click();
        }

        // Check if field value is updated
        async isFieldValueUpdated(value: string) {
            
            await RetirementCalculatorPageSelectors.defaultValuesModal.waitForDisplayed({ timeout: 5000 });
            const fieldValue = await RetirementCalculatorPageSelectors.additionalIncomeDefaultValue.getValue();
            return parseInt(fieldValue) === parseInt(value);
        }



    //close default values modal
            async closeDefaultValuesModal () {
                await RetirementCalculatorPageSelectors.cancelButton.waitForDisplayed({ timeout: 5000 })
                await RetirementCalculatorPageSelectors.cancelButton.waitForClickable({ timeout: 5000 })
                await RetirementCalculatorPageSelectors.cancelButton.click()
            }
         
}
export default new RetirementCalculatorPage();