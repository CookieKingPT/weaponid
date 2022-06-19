import { ICommand } from "wokcommands";

export default {
    category: "Important",
    description: 'Allows you to verify a BadgeID',
    
    options: [
        {
            name: "badgeid",
            description: "Input desired BadgeID",
            required: true,
            type: 'STRING'
        }
    ],

    slash: true,
    testOnly: true,

    callback: ({ interaction, args }) => {

        let badgeidn2 = args[0]
        let badgeidn = badgeidn2.toUpperCase()

        const ItemIDArray = [
            'DOT01', 
            'DOT02',
        ]

        const BadgeOwnerArray = [
            'Nyxw',
            'Astecia',
        ]
        
        const ItemIDPrice = [
            '100,000',
            '250,000',
        ]

        const ItemPurchaseDate = [
            '1st of April, 2022',
            '1st of April, 2022',
        ]
        
        const verif = ItemIDArray.includes(badgeidn);
        const ownerverif = ItemIDArray.indexOf(badgeidn);
        let ownerresult = BadgeOwnerArray[ownerverif];
        let priceresult = ItemIDPrice[ownerverif];
        let purchasedateresult = ItemPurchaseDate[ownerverif];
        let msg = '';

        if (verif === true) {
            msg = ':green_square: The WeaponID **' + badgeidn + '** has been successfully verified! This item was initially bought by ' + ownerresult + ' on the ' + purchasedateresult + ' for ' + priceresult + '$!'
        } else {
            msg = ':red_square: The WeaponID **' + badgeidn + '** could not be verified! Is your WeaponID in CAPSLOCK?'
        }

        if (interaction) {
            interaction.reply({
                content: msg
            })
        }
        

    },
} as ICommand

function parseString(arg0: string) {
    throw new Error("Function not implemented.");
}
