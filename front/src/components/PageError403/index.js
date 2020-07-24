/* eslint-disable react/jsx-indent */
import React from 'react';
import Typist from 'react-typist';
import Fabigeon from '../../assets/images/fabigeon1080p.gif';
import './pageError403.scss';

const PageError403 = () => (
  <>
    <div className="error403-container">
      <h1 className="error403-title">
        <Typist
          cursor={{ hideWhenDone: true }}
        >
          Erreur 403
        </Typist>
      </h1>
      <span className="error403-disclaimer">Si vous êtes ici, vous avez tentez d'accéder une ressource qui est FORBIDDEN</span>
      <div className="error403-text">
        <div className="error403-texts">Vous n'avez pas l'autorisation d'accéder au contenue de cette page.</div>

        <div className="error403-texts">Le problème semble être causé par une mauvaise autorisation.</div>

        <div className="error403-texts">
         Si vous voyez cette page d'erreur pour la première fois, veuillez voir si vous avez les droits de faire ce que vous avez tenter de faire.
        </div>

        <div className="error403-texts">
          Si ce n'est pas la première fois que vous voyez cette page d'erreur
          c'est que vous essayez de casser notre site et ce n'est pas très gentil !
        </div>

        <div className="error403-texts">
          Si vous n'êtes pas un vilain hacker et que vous êtes sûr d'avoir les droits pour accedé à l'adresse de la page souhaitée,
          merci de nous contacter si nous avons mis en place une méthode de contact...
        </div>

        <div className="error403-texts">
          <span className="error403-span">Information techniques (totalement fausses):</span> <br />
          *** STOP: XDF1235CDSN DJHMEDK516DAF
          \\ FCLX78MVLx0000000000
          <div className="fabigeon">
            FABIGEON
            <img
              src={Fabigeon}
              alt="Un magnifique gif du Fabigeon à l'état sauvage"
              className="tooltip"
            />
          </div>
          54547FHSFM
        </div>
      </div>
      <pre className="gandalf error403-texts">
      ....
                                .'' .''' <br />
.                             .'   :  <br />
\\                          .:    :  <br />
 \\                        _:    :       ..----.._  <br />
  \\                    .:::.....:::.. .'         ''.  <br />
   \\                 .'  #-. .-######'     #        '.  <br />
    \\                 '.##'/ ' ################       :  <br />
     \\                  #####################         :   <br />
      \\               ..##.-.#### .''''###'.._        :  <br />
       \\             :--:########:            '.    .' :  <br />
        \\..__...--.. :--:#######.'   '.         '.     :  <br />
        :     :  : : '':'-:'':'::        .         '.  .'  <br />
        '---'''..: :    ':    '..'''.      '.        :' <br />
           \\  :: : :     '      ''''''.     '.      .: <br />
            \\ ::  : :     '            '.      '      : <br />
             \\::   : :           ....' ..:       '     '. <br />
              \\::  : :    .....####\\ .~~.:.             : <br />
               \\':.:.:.:'#########.===. ~ |.'-.   . '''.. : <br />
                \\    .'  ########## \ \ _.' '. '-.       '''. <br />
                :\\  :     ########   \ \      '.  '-.        : <br />
               :  \\'    '   #### :    \ \      :.    '-.      : <br />
              :  .'\\   :'  :     :     \ \       :      '-.    : <br />
             : .'  .\\  '  :      :     :\ \       :        '.   : <br />
             ::   :  \\'  :.      :     : \ \      :          '. : <br />
             ::. :    \\  : :      :    ;  \ \     :           '.: <br />
              : ':    '\\ :  :     :     :  \:\     :        ..' <br />
                 :    ' \\ :        :     ;  \|      :   .''' <br />
                 '.   '  \\:                         :.'' <br />
                  .:..... \\:       :            ..'' <br />
                 '._____|'.\\......'''''''.:..''' <br />
                            \\  <br />
      </pre>
    </div>

  </>
);

export default PageError403;
