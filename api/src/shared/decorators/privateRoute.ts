import ensureModuleAccess from "@modules/authorization/infra/http/middlewares/ensureModuleAccess";
import ensureAuthenticated from "@modules/gUser/infra/middlewares/ensureAuthenticated";

type PrivateRouteProps = {
  MODULE: string;
  RULE?: "READ" | "WRITE";
};

function privateRoute(params?: PrivateRouteProps) {
  return (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
  ): PropertyDescriptor => {
    const originalMethod = propertyDescriptor.value;

    // eslint-disable-next-line no-param-reassign
    propertyDescriptor.value = async function newMethod(...args: any) {
      const { profileId } = await ensureAuthenticated.apply(this, args);

      if (params) {
        const { MODULE, RULE } = params;

        await ensureModuleAccess({
          MODULE,
          RULE,
          GUSERPROFILE_ID: profileId,
        });
      }

      return originalMethod.apply(this, args);
    };

    return propertyDescriptor;
  };
}

export default privateRoute;
