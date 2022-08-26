export const colors = {
  buttons: '#ff8c52',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  CardComment: '#86939e',
  white: 'white',
  black: 'black',
  statusbar: '#ff8c52',
  headerText: 'white',
};

export const parameters = {
  headerHeight: 50,

  styledButton: {
    backgroundColor: colors.buttons,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.buttons,
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
  },

  buttonTitle: {
    color: colors.headerText,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};
